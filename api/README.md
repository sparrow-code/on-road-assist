# API Documentation 

A Brief Introduction About [On Road Assist](https://onroadassist.in/) Application API


### Get Information About Order

You Will Be Able To Get And Post Information In Order
Section of Website Using These API

#### Get all items

```http
  GET /api/order/
```

To Show Recently Created Top 10 Query 

#### Get Specific item

```http
  GET /api/order/${id}
```

To Get Information About Specific ID

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

```http
  GET /api/order/${id}
```

#### Publish Data
To Submit Data Using API

```http
   POST /api/order/
```
| Post Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `veh_reg_no` | `string` | **Required** User's Vehicle Registration Number |
| `full_name` | `string` | **Required** User's Full Name |
| `e_mail_id` | `string` | **Required** User's E-Mail ID |
| `mo_no` | `string / Integer` | **Required** User's Mobile Number|
| `area` | `string` | **Required** User's Nearest Area |
| `lat` | `float / Double` | **Required** User's Postition Longitude |
| `lng` | `float / Double` | **Required** User's Postition Latitude |
| `family_no_1` | `string / Integer` | **Required** User's Family Member Mobile Number |
| `frnd_no_2` | `string / Integer` | **Optional** User's User's Second Friend Mobile Number |
| `frnd_no_3` | `string / Integer` | **Optional** User's Third Friend Mobile Numer|
