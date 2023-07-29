import './Valute.scss'
import { Button } from '@mui/material'
import { useStore } from 'context/Provider'

type Props = {
    onCurrencyChange: (newCurrency: string) => void
}

const currencies = ['USD', 'EUR', 'UAH', 'ZLT']

const Valute: React.FC<Props> = ({ onCurrencyChange }) => {
    const { currency, setCurrency } = useStore()

    const handleClick = (c: string) => {
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
