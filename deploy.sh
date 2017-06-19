serverless deploy -s prod \
  --verbose \
  --merchant_id ${MERCHANT_ID} \
  --public_key ${PUBLIC_KEY} \
  --private_key ${PRIVATE_KEY}
  --env Production
