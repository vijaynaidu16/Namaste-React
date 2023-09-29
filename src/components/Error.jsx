import { useRouteError } from 'react-router-dom'

function Error() {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
        <h1><em>❌ OOPS Something went wrong ❌</em></h1>
        <h3>{err.status}: {err.statusText}</h3>
    </div>
  )
}

export default Error