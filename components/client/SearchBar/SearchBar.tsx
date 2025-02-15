"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface SearchBarProps {
    url: string;
    onSearch?: (name: string) => void;
}

const SearchBar = ({ url, onSearch }: SearchBarProps) => {

    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;

        if (name) {
            onSearch && onSearch(name);
            router.push(`${url}?name=${name}`)
        }
    };

    return (
        <form className='flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1' onSubmit={handleSearch}>
            <input name='name' type='text' placeholder='Search' className='flex-1 bg-transparent outline-none' />
            <button className='cursor-pointer'>
                <Image alt='' src='/images/search.png' width={16} height={16} />
            </button>
        </form>
    )
}

export default SearchBar