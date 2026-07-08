curl -s -X POST http://localhost:3000/api/contacts | python3 -m json.tool
curl -s -X GET http://localhost:3000/api/contacts | python3 -m json.tool
curl -s -X DELETE http://localhost:3000/api/contacts | python3 -m json.tool

curl -s -X GET http://localhost:3000/api/contacts/favorite | python3 -m json.tool

curl -s -X GET http://localhost:3000/api/contacts/1 | python3 -m json.tool
curl -s -X PUT http://localhost:3000/api/contacts/1 | python3 -m json.tool
curl -s -X DELETE http://localhost:3000/api/contacts/1 | python3 -m json.tool

# ---

curl -s -X GET http://localhost:3000/huhukheckhec/kakaka | python3 -m json.tool