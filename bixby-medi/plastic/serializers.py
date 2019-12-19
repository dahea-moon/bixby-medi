from rest_framework import serializers
from . models import Plastic


class PlasticSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plastic
        fields = '__all__'