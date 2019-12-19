from rest_framework import serializers
from . models import Public_health


class Public_healthSerializer(serializers.ModelSerializer):
    class Meta:
        model = Public_health
        fields = '__all__'