import { cn } from "@/lib/utils";

interface ImageBlockProps {
  // CUSTOMIZATION: Replace this with your image URL or import
  imageSrc?: string;
  alt?: string;
  className?: string;
  placeholder?: string;
}

const ImageBlock = ({
  imageSrc,
  alt = "Valentine's memory",
  className,
  placeholder = "Add your special photo here"
}: ImageBlockProps) => {
  if (!imageSrc) {
    return (
      <div
        className={cn(
          "w-full h-48 md:h-64 rounded-xl bg-accent/50 border-2 border-dashed border-border flex items-center justify-center",
          className
        )}
      >
        <p className="text-muted-foreground text-sm text-center px-4">
          {placeholder}
        </p>
      </div>
    );
  }

  return (
    <div className={cn("w-full overflow-hidden rounded-xl", className)}>
      <img
        src={imageSrc}
        alt={alt}
        className="w-full h-64 md:h-96 object-cover rounded-xl"
        loading="lazy"
      />
    </div>
  );
};

export default ImageBlock;
