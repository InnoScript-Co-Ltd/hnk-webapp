import React, { useEffect, useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
interface AlertModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const AlertModal: React.FC<AlertModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <Modal
            title="သေချာလား?"
            description="ဤလုပ်ဆောင်ချက်ကို ပြန်ပြင်၍မရပါ။"
            isOpen={isOpen}
            onClose={onClose} 
        >
            <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button
                    variant="hnkalert"
                    size="hnkalert"
                    className="bg-red-500 text-white"
                    onClick={onClose}
                >
                    Cancele
                </Button>
                <Button variant="hnkalert" size="hnkalert" onClick={onConfirm}>
                    Continue
                </Button>
            </div>
        </Modal>
    );
};

export default AlertModal;
