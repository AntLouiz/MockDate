import { render, screen } from '@testing-library/react'
import { IntervaloDatas } from '../IntervaloDatas'

const DATA_PADRAO = new Date('2021-12-01T00:00:00')
let dataOriginal

describe('IntervaloDatas tests', () => {
    test('contém o primeiro dia do mês', () => {
        render(<IntervaloDatas />)

        expect(screen.getByText('01/07/2021')).toBeInTheDocument()
    })

    test('contém o primeiro dia do mês (classe inteira) ', () => {
        dataOriginal = Date
        global.Date = class extends Date {
            constructor(date) {
                if (date) {
                    return super(date)
                }
                return DATA_PADRAO
            }
        }

        render(<IntervaloDatas />)

        expect(screen.getByText('01/12/2021')).toBeInTheDocument()

        global.Date = dataOriginal
    })

    test('contém o primeiro dia do mês (spy on e mockImplementation) ', () => {
        jest.spyOn(global, 'Date')
            .mockImplementation(() => DATA_PADRAO)
        render(<IntervaloDatas />)

        const primeiraData = screen.getAllByText('01/12/2021')[0]

        expect(primeiraData).toBeInTheDocument()
    })

    test('contém o primeiro dia do mês (setSystemTime e useFakeTimers) ', () => {
        jest.useFakeTimers('modern')
        jest.setSystemTime(DATA_PADRAO)
        render(<IntervaloDatas />)

        const primeiraData = screen.getAllByText('01/12/2021')[0]

        expect(primeiraData).toBeInTheDocument()
        jest.useRealTimers()
    })
})