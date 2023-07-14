import { useContext, createContext, useMemo, useState } from 'react'

interface StoreProviderProps extends React.PropsWithChildren {}

const StoreContext = createContext<any>({
    currency: '',
    setCurrency: () => {},
})

export const useStore = () => useContext(StoreContext)

export default function StoreProvider({ children }: StoreProviderProps) {
    const [currency, setCurrency] = useState('')

    const value = useMemo(
        () => ({
            currency,
            setCurrency,
        }),
        [currency, setCurrency]
    )

    return (
        <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
    )
}
