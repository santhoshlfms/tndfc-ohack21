import { useRouter } from 'next/router'

export default function Application(): JSX.Element {
    const router = useRouter()
    const { applicationId } = router.query
  
    return (
        <div>Application : {applicationId}</div>
    );
  }