import { Controller, Delete, Get, HttpCode, Param, Patch, Post } from "@nestjs/common";
import { JourneyService } from "./journey.service";

@Controller('journey')
export class JourneyController {
    constructor(private journeyService: JourneyService) {

    }

    @Get()
    findAll() {
        return this.journeyService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id) {
        return this.journeyService.findOne(id)
    }

    @Post()
    createJourney() {
        return 'I am create journey'
    }

    @Patch(':id')
    updateJourney() {
        return 'I am update journey'
    }

    @Delete(':id')
    @HttpCode(204)
    removeJourney() {
        return 'I am remove journey'
    }



}