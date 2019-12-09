function CityModel(args) {
    this.ID = args.ID;
    this.Name = args.Name;
    this.Population = args.Population;
    this.CountryCode = args.CountryCode;
    this.CountryName = null;
}

module.exports = CityModel;