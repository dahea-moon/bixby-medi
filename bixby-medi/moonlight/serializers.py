from rest_framework import serializers
from . models import Moonlight


class MoonlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = Moonlight
        fields = '__all__'