import { Injectable } from "@nestjs/common";

@Injectable({})
export class JourneyService {
    findAll() {
        return {'meg' : 'This is all'}
    }

    findOne(id: string) {
        return {'meg' : 'This is',id}
    }

    createJourney() {
        return {'meg' : 'This is new one'}
    }

    updateJourney() {
        return {'meg' : 'This is update'}
    }

    removeJourney() {
        return {'meg' : 'This is remove'}
    }
}