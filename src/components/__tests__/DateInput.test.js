import { render, screen } from '@testing-library/react'
import { DateInput } from '../DateInput'

const DATA_DEFAULT = new Date('2021-12-01T00:00:00')

describe('DateInput tests', () => {
    test('contém o primeiro dia do mês', () => {
        render(<DateInput />)

        expect(screen.getByText('01/07/2021')).toBeInTheDocument()
    })

    test('contém o primeiro dia do mês (setSystemTime) ', () => {
        jest.setSystemTime(DATA_DEFAULT)
        render(<DateInput />)

        expect(screen.getByText('01/12/2021')).toBeInTheDocument()
    })

    test('contém o primeiro dia do mês (setSystemTime e useFakeTimers) ', () => {
        jest.useFakeTimers('modern') // O que é isso?
        jest.setSystemTime(DATA_DEFAULT)
        render(<DateInput />)

        const primeiraData = screen.getAllByText('01/12/2021')[0]

        expect(primeiraData).toBeInTheDocument()
    })
})