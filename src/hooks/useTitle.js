import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=>{
        document.title = `Car Shop - ${title}`;
    }, [title])
}

export default useTitle;