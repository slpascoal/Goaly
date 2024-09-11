import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/CreateGoal'
import { Summary } from './components/Summary'
import { EmptyGoals } from './components/EmptyGoals'
import { useQuery } from '@tanstack/react-query'
import { getWeekSummary } from './http/get-week-summary'

export function App() {
  const { data } = useQuery({
    queryKey: ['week-summary'],
    queryFn: getWeekSummary,
    staleTime: 1000 * 60, //60 seconds
  })

  return (
    <Dialog>
      {data?.total && data.total > 0 ? <Summary /> : <EmptyGoals />}

      <CreateGoal />
    </Dialog>
  )
}
