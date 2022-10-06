import Link from 'next/link'

export default function BackDark() {
    return (
        <Link href="/article">
            <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.25 11.1103L15.5 13.5V1L12.25 3.38971" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 7.25L9.5 1V13.5L1 7.25Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </Link>
    )
}
