import { Principal } from "../../components/principal"
import { UseLoteria} from "../../hooks"

export function Quina() {
    const { quina } = UseLoteria()

    return <Principal item={quina}/>

    
}