import Link from 'next/link'

export default function StudentInfo() {
  return (
    <div>
      <h2>Name: John Esmilio</h2>
      <div>Course Section: CPRG 306 D</div>
      <Link rel="stylesheet" href="https://github.com/john-esmilio" className='hover:text-fuchsia-900'>Github Profile</Link>
    </div>
  )
}

