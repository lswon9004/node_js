import { useEffect } from "react";

const Even = () => {
    useEffect(()=> {
        console.log("even의 update");
    });

    useEffect(() => {
        console.log("even의 mount");
        return () => {
            console.log("even의 unmount");
        };
    }, []);
    return <div>짝수입니다.</div>
}

export default Even;