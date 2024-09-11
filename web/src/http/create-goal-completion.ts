export async function createGoalCompletion(goalID: string) {
  console.log(goalID)
  await fetch('http://localhost:3333/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      goalID,
    }),
  })
}
