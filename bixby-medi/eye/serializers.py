from rest_framework import serializers
from . models import Eye


class EyeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Eye
        fields = '__all__'