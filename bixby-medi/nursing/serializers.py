from rest_framework import serializers
from . models import Nursing


class NursingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Nursing
        fields = '__all__'