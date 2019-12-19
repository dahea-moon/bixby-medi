from rest_framework import serializers
from . models import Mental


class MentalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mental
        fields = '__all__'