from rest_framework import serializers
from . models import Dental


class DentalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dental
        fields = '__all__'