import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
type ShadowButtonProps = {
    label: string;
    fn?: () => void;
    className?: string;
};
const ShadowButton = ({ label, className }: ShadowButtonProps) => {
    return (
        <Button
            className={cn(
                "text-dark login-button h-[64px] w-[247px] rounded-full border-[1px] border-black bg-white font-serif text-2xl font-medium hover:bg-white/95",
                className,
            )}
        >
            {label}
        </Button>
    );
};

export default ShadowButton;
