from rest_framework import serializers
from . models import Oriental


class OrientalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Oriental
        fields = '__all__'