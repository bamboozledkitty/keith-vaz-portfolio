import React, { useState, useCallback } from 'react';
import Cropper, { Area, Point } from 'react-easy-crop';
import { X, Check, ZoomIn, ZoomOut } from 'lucide-react';
import { Button } from './ui/button';
import { Squircle } from './ui/squircle';

interface ProfilePictureCropperModalProps {
    imageSrc: string;
    onSave: (croppedImageDataUrl: string) => void;
    onCancel: () => void;
}

// Helper function to create cropped image from canvas
const createCroppedImage = async (
    imageSrc: string,
    pixelCrop: Area
): Promise<string> => {
    const image = new Image();
    image.src = imageSrc;

    await new Promise((resolve) => {
        image.onload = resolve;
    });

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
        throw new Error('Could not get canvas context');
    }

    // Set canvas size to the crop size
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    // Draw the cropped image
    ctx.drawImage(
        image,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height
    );

    // Return as data URL (JPEG for smaller size)
    return canvas.toDataURL('image/jpeg', 0.9);
};

const ProfilePictureCropperModal: React.FC<ProfilePictureCropperModalProps> = ({
    imageSrc,
    onSave,
    onCancel,
}) => {
    const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
    const [isSaving, setIsSaving] = useState(false);

    const onCropComplete = useCallback((_croppedArea: Area, croppedAreaPixels: Area) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const handleSave = async () => {
        if (!croppedAreaPixels) return;

        setIsSaving(true);
        try {
            const croppedImage = await createCroppedImage(imageSrc, croppedAreaPixels);
            onSave(croppedImage);
        } catch (error) {
            console.error('Error cropping image:', error);
        } finally {
            setIsSaving(false);
        }
    };

    const handleZoomChange = (delta: number) => {
        setZoom((prev) => Math.min(3, Math.max(1, prev + delta)));
    };

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onCancel}
            />

            {/* Modal */}
            <Squircle
                cornerRadius={24}
                className="relative bg-white shadow-2xl w-full max-w-lg mx-4 overflow-hidden"
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                    <h2 className="text-lg font-bold text-gray-900">Edit Profile Picture</h2>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onCancel}
                        className="h-8 w-8 rounded-full text-gray-400 hover:text-gray-700"
                    >
                        <X size={18} />
                    </Button>
                </div>

                {/* Cropper Area */}
                <div className="relative w-full h-80 bg-gray-900">
                    <Cropper
                        image={imageSrc}
                        crop={crop}
                        zoom={zoom}
                        aspect={1}
                        cropShape="round"
                        showGrid={false}
                        onCropChange={setCrop}
                        onZoomChange={setZoom}
                        onCropComplete={onCropComplete}
                    />
                </div>

                {/* Zoom Controls */}
                <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50">
                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleZoomChange(-0.1)}
                            disabled={zoom <= 1}
                            className="h-9 w-9 rounded-full"
                        >
                            <ZoomOut size={18} />
                        </Button>

                        <div className="flex-1">
                            <input
                                type="range"
                                min={1}
                                max={3}
                                step={0.01}
                                value={zoom}
                                onChange={(e) => setZoom(parseFloat(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-black"
                            />
                        </div>

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleZoomChange(0.1)}
                            disabled={zoom >= 3}
                            className="h-9 w-9 rounded-full"
                        >
                            <ZoomIn size={18} />
                        </Button>
                    </div>
                    <p className="text-xs text-gray-500 text-center mt-2">
                        Drag to position • Scroll or use slider to zoom
                    </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-100">
                    <Button
                        variant="ghost"
                        onClick={onCancel}
                        className="text-gray-500"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSave}
                        disabled={isSaving || !croppedAreaPixels}
                        className="gap-2"
                    >
                        <Check size={16} />
                        {isSaving ? 'Saving...' : 'Save'}
                    </Button>
                </div>
            </Squircle>
        </div>
    );
};

export default ProfilePictureCropperModal;
