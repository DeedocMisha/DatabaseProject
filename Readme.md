# EndPoints:
DATABASE_URL=postgresql://postgres:passw@db:5432/database
Бэкенд: http://localhost:7001
Фронтенд: http://localhost:8080
Проверка API: http://localhost:8080/api


# Залив в БД таблицы
docker cp ../Data.csv databaseproject-db-1:/tmp/data.csv

docker exec -it databaseproject-db-1 sh

iconv -f WINDOWS-1251 -t UTF-8 /tmp/data.csv -o /tmp/data   _utf8.csv

sed -E 's/([0-9]),([0-9])/\1.\2/g' /tmp/data_utf8.csv > /tmp/data_sanitized.csv

cat > /tmp/import_data.sql << 'EOF'
\copy mainteble_data (federal_district,economic_region,region,owner_location_region,owner_location_federal_district,vehicle_type,brand,model_modification,model,modification,production_year,registration_year,registration_quarter,registration_month,registration_day,quantity,new_or_used,vin_code,engine_number,body_number,chassis_number,registration_type,ownership_type,district_in_region,city,other_settlements,okato,oktmo,regional_center,postal_code,engine_power,engine_type,fuel_type,engine_volume,engine_volume_range,steering_type,body_type,exact_weight,curb_weight,weight_segment_1,weight_segment_2,weight_segment,weight_segment_3,weight_segment_4,gvw_class,wheel_formula,price_segment,body_type_grouping,brand_origin_country,part_of_world,domestic_or_foreign,production_country_vin,domestic_or_foreign_vin,manufacturer_vin,production_country_chassis,domestic_or_foreign_chassis,manufacturer_chassis,inn,company_name,first_okved_code,okved_description,is_lcv,is_leasing,leasing_status,lessor_inn,lessor_name,lessee_name,lessee_address,lessee_inn,lessee_phone,lessee_email,lessee_first_okved,lessee_okved_description,lessee_director,lessee_position,"ID") FROM '/tmp/data_sanitized.csv' DELIMITER ';' CSV HEADER;
EOF


psql -U postgres -d database -f /tmp/import_data.sql



