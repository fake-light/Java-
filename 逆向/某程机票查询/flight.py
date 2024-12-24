class Flight:
    airlineName: str = None
    departureCityName: str = None
    arrivalCityName: str = None
    departureDateTime: str = None
    arrivalDateTime: str = None
    duration: int = None
    aircraftName: str = None
    adultPrice: int = None

    def printInfo(self):
        print(f"{self.airlineName}  {self.departureCityName} -> {self.arrivalCityName}  {self.departureDateTime} -> {self.arrivalDateTime}  {self.duration}min  {self.aircraftName}  ￥{self.adultPrice}起")
        print("----------------------------------------------------------------------------------------------------")

    @staticmethod
    def sort_flights_by_duration(flights):
        sorted_flights = sorted(flights, key=lambda flight: flight.duration)
        for flight in sorted_flights:
            flight.printInfo()
        return sorted_flights

    @staticmethod
    def sort_flights_by_price(flights):
        sorted_flights = sorted(flights, key=lambda flight: flight.adultPrice)
        for flight in sorted_flights[:10]:
            flight.printInfo()
        return sorted_flights

