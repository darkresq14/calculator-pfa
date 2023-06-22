import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';

type SliderProps = React.ComponentProps<typeof Slider>;

export function SliderAcoperire({ className, ...props }: SliderProps) {
  return (
    <Slider
      defaultValue={[100]}
      min={0}
      max={100}
      step={1}
      className={cn('w-5/6', className)}
      {...props}
    />
  );
}
