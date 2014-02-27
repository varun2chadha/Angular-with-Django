from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from snippets.models import CompanyName, Tab_Details, DropDown_Buttons, DropDown_Buttons2, Footer
from snippets.serializers import HeaderSerializer, TabSerializer, DropDownSerializer, CompanyNameSerializer, DropDown2Serializer, FooterSerializer
from django.shortcuts import render


@api_view(['GET','PUT'])
def header_list(request):
    """
    List all snippets, or create a new snippet.
    """
    if request.method == 'GET':
        snippets1 = CompanyName.objects.all()
        snippets2 = Tab_Details.objects.all()
        snippets3 = DropDown_Buttons.objects.all()
        snippets4 = DropDown_Buttons2.objects.all()
        serializer = HeaderSerializer(snippets1, snippets2, snippets3, snippets4,  many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = HeaderSerializer(data=request.DATA)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','PUT'])
def footer_list(request):
    """
    List all snippets, or create a new snippet.
    """
    if request.method == 'GET':
        snippets1 = Footer.objects.all()
        serializer = FooterSerializer(snippets1,many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = FooterSerializer(data=request.DATA)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def render_index(request):
   return render(request, 'index.html');