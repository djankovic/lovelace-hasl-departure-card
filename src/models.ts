export enum TransportType {
    METRO = 'METRO',
    BUS = 'BUS',
    TRAM = 'TRAM',
    TRAIN = 'TRAIN',
    SHIP = 'SHIP',
    FERRY = 'FETTRY',
    TAXI = 'TAXI',
}

export type DepartureDeviation = {
    importance_level: number
    consequence: string
    message: string
}

export type DepartureLine = {
  id: number | string
  designation: string
  transport_mode: TransportType
  group_of_lines: string
  color?: string
  provider?: string
}

export type Departure = {
    destination: string
    deviations?: DepartureDeviation[]
    direction: string
    direction_code: number
    state: string
    display: string
    stop_point: {
        name: string
        designation: string
    }
    line: DepartureLine
    scheduled: string
    expected: string
}

export type DepartureAttributes = {
    friendly_name: string
    departures: Departure[]
}
