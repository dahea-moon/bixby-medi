from rest_framework import serializers
from . models import Internal


class InternalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Internal
        fields = '__all__'