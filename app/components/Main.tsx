import { Header } from "./main/Header";
import { Recent } from "./main/Recent";

export function Main() {

    return (
        <div>
            <Header />

        <div className="grid grid-cols-1">
            <Recent />
        </div>

        </div>
    )
}