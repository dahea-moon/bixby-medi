from rest_framework import serializers
from . models import Nose


class NoseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Nose
        fields = '__all__'