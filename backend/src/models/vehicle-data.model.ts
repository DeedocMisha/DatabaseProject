import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({ tableName: 'mainteble_data', timestamps: false })
export class MainTable extends Model {


  @Column(DataType.STRING)
  federal_district: string;

  @Column(DataType.STRING)
  economic_region: string;

  @Column(DataType.STRING)
  region: string;

  @Column(DataType.STRING)
  owner_location_region: string;

  @Column(DataType.STRING)
  owner_location_federal_district: string;

  @Column(DataType.STRING)
  vehicle_type: string;

  @Column(DataType.STRING)
  brand: string;

  @Column(DataType.STRING)
  model_modification: string;

  @Column(DataType.STRING)
  model: string;

  @Column(DataType.STRING)
  modification: string;

  @Column(DataType.STRING)
  production_year: string;

  @Column(DataType.STRING)
  registration_year: string;

  @Column(DataType.STRING)
  registration_quarter: string;

  @Column(DataType.INTEGER)
  registration_month: number;

  @Column(DataType.INTEGER)
  registration_day: number;

  @Column(DataType.FLOAT)
  quantity: number;

  @Column(DataType.STRING)
  new_or_used: string;

  @Column(DataType.STRING)
  vin_code: string;

  @Column(DataType.STRING)
  engine_number: string;

  @Column(DataType.STRING)
  body_number: string;

  @Column(DataType.STRING)
  chassis_number: string;

  @Column(DataType.STRING)
  registration_type: string;

  @Column(DataType.STRING)
  ownership_type: string;

  @Column(DataType.STRING)
  district_in_region: string;

  @Column(DataType.STRING)
  city: string;

  @Column(DataType.STRING)
  other_settlements: string;

  @Column(DataType.STRING)
  okato: string;

  @Column(DataType.STRING)
  oktmo: string;

  @Column(DataType.STRING)
  regional_center: string;

  @Column(DataType.STRING)
  postal_code: string;

  @Column(DataType.STRING)
  engine_power: string;

  @Column(DataType.STRING)
  engine_type: string;

  @Column(DataType.STRING)
  fuel_type: string;

  @Column(DataType.STRING)
  engine_volume: string;

  @Column(DataType.STRING)
  engine_volume_range: string;

  @Column(DataType.STRING)
  steering_type: string;

  @Column(DataType.STRING)
  body_type: string;

  @Column(DataType.STRING)
  exact_weight: string;

  @Column(DataType.STRING)
  curb_weight: string;

  @Column(DataType.STRING)
  weight_segment_1: string;

  @Column(DataType.STRING)
  weight_segment_2: string;

  @Column(DataType.STRING)
  weight_segment: string;

  @Column(DataType.STRING)
  weight_segment_3: string;

  @Column(DataType.STRING)
  weight_segment_4: string;

  @Column(DataType.STRING)
  gvw_class: string;

  @Column(DataType.STRING)
  wheel_formula: string;

  @Column(DataType.STRING)
  price_segment: string;

  @Column(DataType.STRING)
  body_type_grouping: string;

  @Column(DataType.STRING)
  brand_origin_country: string;

  @Column(DataType.STRING)
  part_of_world: string;

  @Column(DataType.STRING)
  domestic_or_foreign: string;

  @Column(DataType.STRING)
  production_country_vin: string;

  @Column(DataType.STRING)
  domestic_or_foreign_vin: string;

  @Column(DataType.STRING)
  manufacturer_vin: string;

  @Column(DataType.STRING)
  production_country_chassis: string;

  @Column(DataType.STRING)
  domestic_or_foreign_chassis: string;

  @Column(DataType.STRING)
  manufacturer_chassis: string;

  @Column(DataType.STRING)
  inn: string;

  @Column(DataType.STRING)
  company_name: string;

  @Column(DataType.STRING)
  first_okved_code: string;

  @Column(DataType.STRING)
  okved_description: string;

  @Column(DataType.STRING)
  is_lcv: string;

  @Column(DataType.STRING)
  is_leasing: string;

  @Column(DataType.STRING)
  leasing_status: string;

  @Column(DataType.STRING)
  lessor_inn: string;

  @Column(DataType.STRING)
  lessor_name: string;

  @Column(DataType.TEXT)
  lessee_name: string;

  @Column(DataType.STRING)
  lessee_address: string;

  @Column(DataType.STRING)
  lessee_inn: string;

  @Column(DataType.STRING)
  lessee_phone: string;

  @Column(DataType.STRING)
  lessee_email: string;

  @Column(DataType.STRING)
  lessee_first_okved: string;

  @Column(DataType.TEXT)
  lessee_okved_description: string;

  @Column(DataType.STRING)
  lessee_director: string;

  @Column(DataType.STRING)
  lessee_position: string;

  @PrimaryKey
  @Column(DataType.INTEGER)
  declare ID: number;
}
