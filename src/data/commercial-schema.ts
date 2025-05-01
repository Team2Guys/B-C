import { AntiMicrobial, Auditorium, BalconyBlinds, FireRetardant, HotelsRestaurants, IndoorBlinds, Outdoor, Pergola, PrintedBlinds, Washable, WaterRepellent } from "./commercial-schema-data";

export const CommercialSchemaMap: Record<string, object> = {
    "Hotels & Restaurants": HotelsRestaurants,
    "Printed Blinds": PrintedBlinds,
    "Balcony Blinds And Curtains": BalconyBlinds,
    "Auditoriums": Auditorium,
    "Indoor Blinds And Curtains": IndoorBlinds,
    "Pergola Curtains": Pergola,
    "Fire Retardant": FireRetardant,
    "Water Repellent": WaterRepellent,
    "Washable": Washable,
    "Anti Microbial": AntiMicrobial,
    "Outdoor Blinds And Curtains": Outdoor,
}