import { AlertCircle } from 'lucide-react'
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

interface FunnyErrorProps {
  isOpen: boolean
  onClose: () => void
  errorMessage?: string
}

export function FunnyError({ isOpen, onClose, errorMessage }: FunnyErrorProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <AlertCircle className="h-6 w-6 text-yellow-500" />
            Oops! We're still cooking...
          </DialogTitle>
          <DialogDescription>
          <p className="mt-2">Feature loading—like downloading a pizza: not ready yet!</p>
<p className="mt-2">Error: {errorMessage}</p>
<p className="mt-2">Check back soon!</p>

          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
