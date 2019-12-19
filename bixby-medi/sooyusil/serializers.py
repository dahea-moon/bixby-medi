from rest_framework import serializers
from . models import Sooyusil


class SooyusilSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sooyusil
        fields = '__all__'