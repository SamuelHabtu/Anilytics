import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const Route = createFileRoute('/')({
  component: SearchPage,
})

function SearchPage() {
  return (
    <>
      <div className="flex">
        <Input></Input>
        <Button variant={'destructive'}>Button</Button>
      </div>
    </>
  )
}
