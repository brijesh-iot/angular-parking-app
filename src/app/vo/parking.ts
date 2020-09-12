export interface Parking {
    timestamp:  Date;
    isOccupied: boolean;
    meter:      Meter;
    parking:    ParkingTime;
    deviceStatus: DeviceStatus;
    userStatus: UserStatus;
}

export interface Meter {
    number:   number;
    location: [];
    address:  string;
}

export interface ParkingTime {
    startTime: Date;
    endTime:   Date;
}

export interface DeviceStatus {
    batteryLife: number;
    status: string;
}

export interface UserStatus {
    scan: number;
    userCode: string;
}