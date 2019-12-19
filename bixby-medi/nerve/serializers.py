from rest_framework import serializers
from . models import Nerve


class NerveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Nerve
        fields = '__all__'