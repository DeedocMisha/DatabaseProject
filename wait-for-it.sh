./wait-for-it.sh db:5432 --timeout=30 --strict -- echo "Database is up"
psql -h db -U user -d dbname -f import_data.sql
