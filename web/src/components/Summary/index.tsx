import { Plus } from 'lucide-react'
import { Button } from '../ui/button'
import { DialogTrigger } from '../ui/dialog'
import iconGoaly from '../../assets/goaly-icon.svg'
import { Progress, ProgressIndicator } from '../ui/progress-bar'
import { Separator } from '../ui/separator'

const style = {
  width: '20%',
}

export function Summary() {
  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={iconGoaly} alt="icone Goaly" />
          <span className="text-lg font-semibold">5 a 10 de Agosto</span>
        </div>
        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Cadastrar Meta
          </Button>
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress value={2} max={10}>
          <ProgressIndicator style={style} />
        </Progress>

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            Você completou <span className="text-zinc-100">2</span> de{' '}
            <span className="text-zinc-100">10</span> metas nessa semana
          </span>
          <span>20%</span>
        </div>

        <Separator />
      </div>
    </div>
  )
}
