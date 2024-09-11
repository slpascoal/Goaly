import { Plus } from 'lucide-react'
import { OutlineButton } from '../ui/outline-button'
import { getPendinGoals } from '../../http/get-pending-goals'
import { useQuery } from '@tanstack/react-query'
import { createGoalCompletion } from '../../http/create-goal-completion'

export function PendingGoals() {
  const { data } = useQuery({
    queryKey: ['pending-goals'],
    queryFn: getPendinGoals,
    staleTime: 1000 * 60, //60 seconds
  })

  if (!data) {
    return null
  }

  async function clickCompleteGoal(goalId: string) {
    await createGoalCompletion(goalId)
  }

  return (
    <div className="flex flex-wrap gap-3">
      {data.map(goal => {
        return (
          <OutlineButton
            key={goal.id}
            disabled={goal.completionCount >= goal.desiredWeeklyFrequency}
            onClick={() => clickCompleteGoal(goal.id)}
          >
            <Plus className="size-4 text-zinc-600" />
            {goal.title}
          </OutlineButton>
        )
      })}
    </div>
  )
}
