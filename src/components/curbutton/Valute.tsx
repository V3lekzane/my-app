import './Valute.scss'
import { Button } from '@mui/material'

import { useStore } from 'context/Provider'

type Props = {}
type ValuteProps = {
    onCurrencyChange: (newCurrency: string) => void
}

const currencies = ['USD', 'EUR', 'UAH', 'ZLT']

const Valute: React.FC<ValuteProps> = ({ onCurrencyChange }) => {
    const { currency, setCurrency } = useStore()

    console.log(currency)
    const handleClick = (c: string) => {
        console.log(c)
        setCurrency(c)
    }

    return (
        <div className="valutes">
            {currencies.map((c) => (
                <Button
                    key={c}
                    variant={c === currency ? 'contained' : 'text'}
                    onClick={() => handleClick(c)}
                >
                    {c}
                </Button>
            ))}
        </div>
    )
}

export default Valute
