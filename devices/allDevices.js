module.exports =
	[{
		"lastAction": "unknown",
		"currentState": "UNKNOWN",
		"link": "/devFunc/DF-PUERTA",
		"actuator": true,
		"isEnabled": true,
		"id": "DF-PUERTA",
		"sensor": true,
		"isQuiescent": false,
		"devfunc-subtype": "ON_OFF",
		"name": "Puerta NFC WoO",
		"device": {
			"id": "DEV-PORTA",
			"name": "Porta",
			"isEnabled": true
		},
		"previousState": "UNKNOWN",
		"isStarted": true,
		"devfunc-type": "bistate"
	}, {
		"lastAction": "unknown",
		"currentState": "UNKNOWN",
		"link": "/devFunc/DF-SENSOR.CERROJO.CERRADO",
		"actuator": false,
		"isEnabled": true,
		"id": "DF-SENSOR.CERROJO.CERRADO",
		"sensor": true,
		"isQuiescent": false,
		"devfunc-subtype": "ON_OFF",
		"name": "Sensor Porta Tancada",
		"device": {
			"id": "DEV-PORTA",
			"name": "Porta",
			"isEnabled": true
		},
		"previousState": "UNKNOWN",
		"isStarted": true,
		"devfunc-type": "bistate"
	}, {
		"lastAction": "unknown",
		"currentState": "UNKNOWN",
		"link": "/devFunc/DF-SENSOR.LUZ",
		"actuator": false,
		"isEnabled": true,
		"id": "DF-SENSOR.LUZ",
		"sensor": true,
		"isQuiescent": false,
		"devfunc-subtype": "Luminance",
		"name": "Sensor Llum",
		"device": {
			"id": "DEV-SENSORS.PORTA",
			"name": "Sensors Porta",
			"isEnabled": true
		},
		"previousState": "UNKNOWN",
		"isStarted": true,
		"devfunc-type": "numeric"
	}, {
		"lastAction": "unknown",
		"currentState": "UNKNOWN",
		"link": "/devFunc/DF-SENSOR.TEMPERATURA",
		"actuator": false,
		"isEnabled": true,
		"id": "DF-SENSOR.TEMPERATURA",
		"sensor": true,
		"isQuiescent": false,
		"devfunc-subtype": "Temperature",
		"name": "Sensor Temperatura",
		"device": {
			"id": "DEV-SENSORS.PORTA",
			"name": "Sensors Porta",
			"isEnabled": true
		},
		"previousState": "UNKNOWN",
		"isStarted": true,
		"devfunc-type": "numeric"
	}, {
		"lastAction": "unknown",
		"currentState": "UNKNOWN",
		"link": "/devFunc/DF-SENSOR.SONIDO",
		"actuator": false,
		"isEnabled": true,
		"id": "DF-SENSOR.SONIDO",
		"sensor": true,
		"isQuiescent": false,
		"devfunc-subtype": "Undefined",
		"name": "Sensor Nivel Sonoro",
		"device": {
			"id": "DEV-SENSORS.PORTA",
			"name": "Sensors Porta",
			"isEnabled": true
		},
		"previousState": "UNKNOWN",
		"isStarted": true,
		"devfunc-type": "numeric"
	}, {
		"lastAction": "unknown",
		"currentState": "UNKNOWN",
		"link": "/devFunc/DF-SENSOR.VIBRACION",
		"actuator": false,
		"isEnabled": true,
		"id": "DF-SENSOR.VIBRACION",
		"sensor": true,
		"isQuiescent": false,
		"devfunc-subtype": "Undefined",
		"name": "Sensor Vibración",
		"device": {
			"id": "DEV-SENSORS.PORTA",
			"name": "Sensors Porta",
			"isEnabled": true
		},
		"previousState": "UNKNOWN",
		"isStarted": true,
		"devfunc-type": "numeric"
	}, {
		"lastAction": "unknown",
		"currentState": "UNKNOWN",
		"link": "/devFunc/DF-SENSOR.CONTACTO",
		"actuator": false,
		"isEnabled": true,
		"id": "DF-SENSOR.CONTACTO",
		"sensor": true,
		"isQuiescent": false,
		"devfunc-subtype": "Undefined",
		"name": "Sensor Contacto Magnetico",
		"device": {
			"id": "DEV-SENSORS.PORTA",
			"name": "Sensors Porta",
			"isEnabled": true
		},
		"previousState": "UNKNOWN",
		"isStarted": true,
		"devfunc-type": "numeric"
	}, {
		"lastAction": "unknown",
		"currentState": "UNKNOWN",
		"link": "/devFunc/DF-SENSOR.HUMEDAD",
		"actuator": false,
		"isEnabled": true,
		"id": "DF-SENSOR.HUMEDAD",
		"sensor": true,
		"isQuiescent": false,
		"devfunc-subtype": "RelativeHumidity",
		"name": "Sensor Humedad",
		"device": {
			"id": "DEV-SENSORS.PORTA",
			"name": "Sensors Porta",
			"isEnabled": true
		},
		"previousState": "UNKNOWN",
		"isStarted": true,
		"devfunc-type": "numeric"
	}, {
		"lastAction": "unknown",
		"currentState": "UNKNOWN",
		"link": "/devFunc/DF-NFC.TAG.READER",
		"actuator": false,
		"isEnabled": true,
		"id": "DF-NFC.TAG.READER",
		"sensor": true,
		"isQuiescent": false,
		"name": "NFC Tag Reader",
		"device": {
			"id": "DEV-NFC",
			"name": "NFC Antena",
			"isEnabled": true
		},
		"previousState": "UNKNOWN",
		"isStarted": true,
		"devfunc-type": "alphanumeric"
	}, {
		"lastAction": "unknown",
		"currentState": "UNKNOWN",
		"link": "/devFunc/DF-VENTILADOR",
		"actuator": true,
		"isEnabled": true,
		"id": "DF-VENTILADOR",
		"sensor": true,
		"isQuiescent": false,
		"devfunc-subtype": "ON_OFF",
		"name": "Ventilador",
		"device": {
			"id": "DEV-CLIMATIZADOR",
			"name": "Climatizador",
			"isEnabled": true
		},
		"previousState": "UNKNOWN",
		"isStarted": true,
		"devfunc-type": "togglebistate"
	}, {
		"lastAction": "unknown",
		"currentState": "UNKNOWN",
		"link": "/devFunc/DF-LUZ",
		"actuator": true,
		"isEnabled": true,
		"id": "DF-LUZ",
		"sensor": true,
		"isQuiescent": false,
		"devfunc-subtype": "ON_OFF",
		"name": "Luz",
		"device": {
			"id": "DEV-LUZ",
			"name": "Luz",
			"isEnabled": true
		},
		"previousState": "UNKNOWN",
		"isStarted": true,
		"devfunc-type": "togglebistate"
	}, {
		"lastAction": "unknown",
		"currentState": "UNKNOWN",
		"link": "/devFunc/DF-BUZZER",
		"actuator": true,
		"isEnabled": true,
		"id": "DF-BUZZER",
		"sensor": false,
		"isQuiescent": false,
		"devfunc-subtype": "ON_OFF",
		"name": "Zumbador",
		"device": {
			"id": "DEV-ALARMA",
			"name": "Alarma",
			"isEnabled": true
		},
		"previousState": "UNKNOWN",
		"isStarted": true,
		"devfunc-type": "bistate"
	}];