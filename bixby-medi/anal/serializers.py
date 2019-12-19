from rest_framework import serializers
from . models import Anal


class AnalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Anal
        fields = '__all__'